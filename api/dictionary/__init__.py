# -------------------------------------
# @file      : __init__.py
# @author    : Autumn
# @contact   : rainy-autumn@outlook.com
# @time      : 2024/9/8 15:10
# -------------------------------------------
from fastapi import APIRouter

from .manage import router as manage_routeer
router = APIRouter()

router.include_router(manage_routeer, prefix="/manage")