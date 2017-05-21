from glob import iglob
import json
from os import makedirs, sep
from os.path import isfile, split as split_path
import re
from shutil import rmtree

PROGRAMS_ROOT = 'programs' + sep
PROGRAMS = (p for p in iglob(PROGRAMS_ROOT + '**', recursive=True)
            if isfile(p))
OUT_DIR = 'build/prog'
COMMENT = '\s*(?://|#)'


def mkdirp(path):
    try:
        makedirs(path)
    except OSError:
        pass


def make_regions(prog):
    regions = {}
    stack = []

    for n, line in enumerate(prog['lines']):
        region = re.match('%s region (.*)' % COMMENT, line)
        if region is not None:
            name = region.group(1)
            regions[name] = {'a': n + 1}
            stack.append(name)
            continue

        endregion = re.match('%s endregion' % COMMENT, line)
        if endregion is not None:
            name = stack.pop()
            regions[name]['b'] = n

    for name, indices in regions.items():
        assert len(indices) == 2
        assert indices['a'] < indices['b']

    if regions:
        prog['regions'] = regions


def build(p):
    assert p.startswith(PROGRAMS_ROOT)

    lines = open(p, encoding='utf-8').readlines()
    for n, line in enumerate(lines):
        assert line.endswith('\n')
        lines[n] = line[:-1]

    prog = {'lines': lines}
    make_regions(prog)

    p = p[len(PROGRAMS_ROOT):]
    path, name = split_path(p)
    path = '%s/%s' % (OUT_DIR, path)
    mkdirp(path)

    def replace_json(previous):
        return ('.json' if previous.group(1) == 'js' else
                '_%s.json' % previous.group(1))

    name = re.sub('\.(.*?)$', replace_json, name)
    with open('%s/%s' % (path, name), 'w', encoding='utf-8') as out:
        out.write(json.dumps(prog, indent=2, sort_keys=True))


if __name__ == '__main__':
    rmtree(OUT_DIR)
    mkdirp(OUT_DIR)

    for p in PROGRAMS:
        print(p)
        build(p)
