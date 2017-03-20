def encode(string):
    return ''.join(['&#%s;' % hex(ord(c))[1:] for c in string])


_mailto = encode('mailto:')
_email = encode('mvasilkov') + encode('@gmail.com')

email = '<a href="%s%s">%s</a>' % (_mailto, _email, _email)
