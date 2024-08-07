# `prettier-config-matsonkepson`

## Installation steps

**npm**:

```shell
$ npm install --save-dev prettier-config-matsonkepson
```

**Add to `package.json` with bash one-liner script**:

```shell
echo "$(jq '. +={"prettier":"prettier-config-matsonkepson"}' package.json )" > package.json
```

**check `package.json`**:

```jsonc
{
   // root tree...
   "prettier": "prettier-config-matsonkepson",
}
```

**Add extension for the linter**

```shell
cat << _EOF | jq > .eslintrc.json
{ "root": true, "extends": ["./node_modules/prettier-config-matsonkepson/.eslintrc.json"] }
_EOF
```
