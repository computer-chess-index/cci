# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2030<sub>(+29) | 2353<sub>(+4) | 2439<sub>(+35) |  |
| 0.8.0 | 2026-03-03 | 2001 | 2349 | 2404 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2071<sub>(+1) | 2423<sub>(+19) | 2469<sub>(+8) |  |
| 0.8.0 | 2026-03-03 | 2070 | 2404 | 2461 |  |
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

Generated: 2026-11-12 05:39:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 2000 --> 2500
  line "E1: STC (8.0+0.08s)" [2001, 2030]
  line "E1: LTC (60.0+0.60s)" [2349, 2353]
  line "E1: VLTC (2m24s+1.12s)" [2404, 2439]
  line "P1: STC (8.0+0.08s)" [2070, 2071]
  line "P1: LTC (60.0+0.60s)" [2404, 2423]
  line "P1: VLTC (2m24s+1.12s)" [2461, 2469]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2469 | 49 | 146 | 51% | 2476 | 22% |
|  |  | E1 | 2439 | 39 | 228 | 53% | 2396 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2423 | 53 | 124 | 49% | 2431 | 23% |
|  |  | E1 | 2353 | 36 | 264 | 51% | 2334 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2071 | 45 | 180 | 46% | 2115 | 20% |
|  |  | E1 | 2030 | 39 | 248 | 49% | 2044 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2461 | 45 | 168 | 44% | 2512 | 24% |
|  |  | E1 | 2404 | 42 | 198 | 50% | 2385 | 26% |
|  |  | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2404 | 53 | 124 | 49% | 2414 | 24% |
|  |  | E1 | 2349 | 42 | 212 | 48% | 2375 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2001 | 36 | 284 | 44% | 2083 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |
|  |  | P1 | 2070 | 46 | 176 | 49% | 2093 | 18% |