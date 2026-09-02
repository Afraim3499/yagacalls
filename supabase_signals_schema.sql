-- Run this in your Supabase SQL Editor to create the tables for the Signal Bot

CREATE TABLE IF NOT EXISTS public.crypto_signals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    symbol VARCHAR(50) NOT NULL,
    pair VARCHAR(50) NOT NULL,
    direction VARCHAR(10) NOT NULL, -- 'LONG' or 'SHORT'
    leverage VARCHAR(20) NOT NULL,
    timeframe VARCHAR(10) NOT NULL,
    
    entry_price NUMERIC NOT NULL,
    stop_loss NUMERIC NOT NULL,
    tp1 NUMERIC NOT NULL,
    tp2 NUMERIC NOT NULL,
    tp3 NUMERIC NOT NULL,
    
    status VARCHAR(20) DEFAULT 'ACTIVE', -- ACTIVE, HIT_TP1, HIT_TP2, HIT_TP3, HIT_SL, CLOSED
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security) but allow anon access for now (since it's a private admin tool)
ALTER TABLE public.crypto_signals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable all access for anon" ON public.crypto_signals FOR ALL TO anon USING (true) WITH CHECK (true);

-- Optional: Enable realtime for this table so the frontend can react to bot updates instantly
alter publication supabase_realtime add table public.crypto_signals;
