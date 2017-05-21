from collections import deque


def last(iterator):
    d = deque(iterator, maxlen=1)
    return d.pop()


if __name__ == '__main__':
    assert last(iter('apple')) == 'e'
