# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2047<sub>(+41) | 2368<sub>(+8) | 2444<sub>(+34) |  |
| 0.8.0 | 2026-03-03 | 2006 | 2360 | 2410 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2061<sub>(+2) | 2411<sub>(+17) | 2452<sub>(+3) |  |
| 0.8.0 | 2026-03-03 | 2059 | 2394 | 2449 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.0 | 2026-03-03 | 2074 | 2344 | 2407 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LittleWing+<version>&body=###%20Engine%20name%0ALittleWing%0A%0A###%20Version%0A0.8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-10 05:39:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 2000 --> 2500
  line "E1: STC (8.0+0.08s)" [2006, 2047]
  line "E1: LTC (60.0+0.60s)" [2360, 2368]
  line "E1: VLTC (2m24s+1.12s)" [2410, 2444]
  line "P1: STC (8.0+0.08s)" [2059, 2061]
  line "P1: LTC (60.0+0.60s)" [2394, 2411]
  line "P1: VLTC (2m24s+1.12s)" [2449, 2452]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2452 | 51 | 138 | 51% | 2466 | 23% |
|  |  | E1 | 2444 | 40 | 212 | 51% | 2429 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2411 | 53 | 124 | 49% | 2421 | 23% |
|  |  | E1 | 2368 | 37 | 248 | 51% | 2356 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2061 | 45 | 180 | 46% | 2106 | 20% |
|  |  | E1 | 2047 | 39 | 240 | 50% | 2051 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2449 | 45 | 168 | 44% | 2500 | 24% |
|  |  | E1 | 2410 | 43 | 194 | 49% | 2398 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2394 | 53 | 124 | 49% | 2403 | 24% |
|  |  | E1 | 2360 | 42 | 212 | 48% | 2387 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2059 | 47 | 172 | 49% | 2083 | 19% |
|  |  | E1 | 2006 | 36 | 284 | 44% | 2090 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |