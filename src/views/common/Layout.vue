<template>
  <el-container>
    <el-header height="50px">
      <div class="header-left">
        <div class="logo">
          <img src="@/assets/logo.png" alt />
        </div>
      </div>
      <div class="header-right">
        <span class="r-item">
          <el-dropdown trigger="click">
            <span class="item app-cursor">
              <i class="iconfont icon-question-circle-fill"></i>
              <i class="iconfont small icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="app-header-dropdown">
              <a
                class="app-dropdown-link"
                href="https://github.com/dreamans/syncd/issues"
                target="_blank"
              >
                <el-dropdown-item>
                  <i class="iconfont small left icon-help"></i>帮助
                </el-dropdown-item>
              </a>
              <a class="app-dropdown-link" href="https://github.com/dreamans/syncd" target="_blank">
                <el-dropdown-item>
                  <i class="iconfont small left icon-pull-request"></i>syncd
                </el-dropdown-item>
              </a>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        <span class="r-item">
          <el-dropdown trigger="click" @command="userSettingHandler">
            <span class="item app-cursor">
              <img class="avatar" src="@/assets/logo.png" />
              <i class="iconfont small icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="app-header-dropdown">
              <el-dropdown-item class="text">
                <i class="iconfont small left icon-user"></i>管理员
              </el-dropdown-item>
              <el-dropdown-item command="setting" divided>
                <i class="iconfont small left icon-setting"></i>个人设置
              </el-dropdown-item>
              <el-dropdown-item command="password">
                <i class="iconfont small left icon-key"></i>修改密码
              </el-dropdown-item>
              <el-dropdown-item command="logout" divided>
                <i class="iconfont small left icon-logout"></i>退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item route="/list" index="1-1">列表</el-menu-item>
              <el-menu-item index="/form">表单</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
             <el-breadcrumb separator="/" class="bread-crumb">
                    <el-breadcrumb-item><i class="iconfont small icon-breadcrumbs el-icon-s-home"></i></el-breadcrumb-item>
                    <el-breadcrumb-item>aaa</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="container">
                    <router-view/>
                    
                </div>
        </el-main>
        <el-footer>
            <div class="app-cpy">
                        <p>
                        ©️ {{ new Date().getFullYear() }} <a href="https://github.com/dreamans/syncd" target="_blank">Syncd</a>. All Rights Reserved. MIT License.
                        </p>
                    </div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

 <script>
export default {
  methods: {
    userSettingHandler() {},

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
 