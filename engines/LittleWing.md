# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2051<sub>(+42) | 2368<sub>(+7) | 2448<sub>(+37) |  |
| 0.8.0 | 2026-03-03 | 2009 | 2361 | 2411 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2141<sub>(+27) | 2469<sub>(+19) | 2516<sub>(+9) |  |
| 0.8.0 | 2026-03-03 | 2114 | 2450 | 2507 |  |
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

Generated: 2026-11-05 05:39:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2009, 2051]
  line "E1: LTC (60.0+0.60s)" [2361, 2368]
  line "E1: VLTC (2m24s+1.12s)" [2411, 2448]
  line "P1: STC (8.0+0.08s)" [2114, 2141]
  line "P1: LTC (60.0+0.60s)" [2450, 2469]
  line "P1: VLTC (2m24s+1.12s)" [2507, 2516]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2516 | 52 | 130 | 52% | 2525 | 23% |
|  |  | E1 | 2448 | 41 | 204 | 52% | 2430 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2469 | 53 | 124 | 49% | 2477 | 23% |
|  |  | E1 | 2368 | 38 | 236 | 51% | 2356 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2141 | 49 | 152 | 47% | 2167 | 20% |
|  |  | E1 | 2051 | 41 | 224 | 50% | 2055 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2507 | 45 | 168 | 44% | 2558 | 24% |
|  |  | E1 | 2411 | 43 | 194 | 49% | 2399 | 26% |
|  |  | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2361 | 42 | 212 | 48% | 2387 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  |  | P1 | 2450 | 53 | 124 | 49% | 2460 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2009 | 36 | 284 | 44% | 2093 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |
|  |  | P1 | 2114 | 47 | 172 | 49% | 2137 | 19% |