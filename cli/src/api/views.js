import ora from "ora"
import axios from "axios"

const VIEWS_URL = "https://api.github.com/repositories/871577330/contents/source/views"
const headers = {
    'User-Agent': 'Node.js',
};

export async function getViewList() {
    const spinner = ora("Fetching view list...").start()

    try {
        const response = await axios.get(VIEWS_URL, {
            headers,
        })
        spinner.succeed()
        return response.data
    } catch (error) {
        spinner.fail()
        return []
    }
}

export async function downloadView(viewName) {

}