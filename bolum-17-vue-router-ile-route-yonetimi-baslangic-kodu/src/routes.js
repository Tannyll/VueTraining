import Home from './components/Home';
import Header from './components/Header';

const User = resolve => {
        require.ensure(["./components/user/User.vue"], () => {
            resolve(require("./components/user/User.vue"));
        })
    }
    // Webpack Lazy load
const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"], () => {
        resolve(require("./components/user/UserStart.vue"));
    })
}
const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"], () => {
        resolve(require("./components/user/UserDetail.vue"));
    })
}
const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"], () => {
        resolve(require("./components/user/UserEdit.vue"));
    })
}

export const routes = [{
        path: '/',
        name: 'anasayfa',
        components: {
            default: Home,
            "header-top": Header
        }
    },
    {
        path: '/user',
        name: 'kullanici',
        components: {
            default: User,
            "header-top": Header
        },
        children: [
            { path: '', component: UserStart, name: "userHome" },
            {
                path: ':id',
                component: UserDetail,
                name: "userDetail",
                beforeEnter: (to, from, next) => {
                    next();
                }
            },
            { path: ':id/edit', component: UserEdit, name: "userEdit" }
        ]
    },
    {
        path: "/redirect",
        redirect: "/user"
    },
    {
        path: "*",
        redirect: "/"
    }
]