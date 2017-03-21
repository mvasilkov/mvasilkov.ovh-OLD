def encode1(c):
    return '&#%s;' % hex(ord(c))[1:]


def encode(string):
    return ''.join([encode1(c) for c in string])


_mailto = encode('mailto:')
_email = encode('mvasilkov') + encode1('@') + encode('gmail.com')

email = '<a href="%s%s">%s</a>' % (_mailto, _email, _email)
