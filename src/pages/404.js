import * as React from "react"
import {Link} from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="h-screen flex items-center justify-center">
        <div className="">
        <h1 className="mb-4 text-3xl">404: Not Found</h1>
        <p className="mb-4">This page doesn't exist</p>
        <Link to="/">
          <span className="text-secondary-600 underline italic">
            Head back to home
          </span>
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
