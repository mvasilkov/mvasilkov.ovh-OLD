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


def mkdirp(path):
    try:
        makedirs(path)
    except OSError:
        pass


def build(p):
    assert p.startswith(PROGRAMS_ROOT)

    lines = open(p, encoding='utf-8').readlines()
    for n, line in enumerate(lines):
        assert line.endswith('\n')
        lines[n] = line[:-1]

    p = p[len(PROGRAMS_ROOT):]
    path, name = split_path(p)
    path = '%s/%s' % (OUT_DIR, path)
    mkdirp(path)

    def replace_json(previous):
        return ('.json' if previous.group(1) == 'js' else
                '_%s.json' % previous.group(1))

    name = re.sub('\.(.*?)$', replace_json, name)
    with open('%s/%s' % (path, name), 'w', encoding='utf-8') as out:
        out.write(json.dumps({'lines': lines}, indent=2))


if __name__ == '__main__':
    rmtree(OUT_DIR)
    mkdirp(OUT_DIR)

    for p in PROGRAMS:
        print(p)
        build(p)
