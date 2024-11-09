<template>
    <div>
        <div>
            <p>
                <strong>Router Projects: </strong> {{ $route.fullPath }}
            </p>
        </div>
        <nav>
            <div>
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/admin">DashBoard</router-link>
            </div>
        </nav>
    </div>
    <div>
        <main>
            <router-view></router-view>
        </main>
    </div>

</template>
