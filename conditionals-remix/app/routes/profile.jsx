import { redirect } from '@remix-run/node'

const Profile = () => {
    return <div>This is your profile</div>
}

export const loader = () => {
    const allowAccess = false; // This is usually deduced from authentication state of the user

    if (!allowAccess) {
        console.log("Redirecting to home...")
        
        return redirect('/')
    }

    return null
}

export default Profile