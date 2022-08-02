# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

# pyre-ignore-all-errors
from typing import Any


class GenericMeta(type):
    def __getitem__(self, *args) -> Any:
        return self.__class__(self.__name__, self.__bases__, dict(self.__dict__))


class Generic(metaclass=GenericMeta):
    pass
