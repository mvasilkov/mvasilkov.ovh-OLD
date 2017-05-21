# region last
from collections import deque


def last(iterator):
    q = deque(iterator, maxlen=1)
    return q.pop() if q else None
    # endregion


if __name__ == '__main__':
    assert last(iter('apple')) == 'e'
    assert last(iter('')) is None
