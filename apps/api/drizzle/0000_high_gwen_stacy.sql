CREATE TABLE "goals" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"target_amount" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "goals_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "goals_target_amount_positive" CHECK ("goals"."target_amount" > 0)
);
--> statement-breakpoint
CREATE TABLE "records" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"date" date NOT NULL,
	"description" text NOT NULL,
	"amount" integer NOT NULL,
	"category" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "records_amount_positive" CHECK ("records"."amount" > 0)
);
--> statement-breakpoint
CREATE INDEX "records_user_id_date_idx" ON "records" USING btree ("user_id","date" desc);