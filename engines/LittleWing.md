# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2022<sub>(+54) | 2341<sub>(+22) | 2412<sub>(+43) |  |
| 0.8.0 | 2026-03-03 | 1968 | 2319 | 2369 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2064<sub>(+13) | 2406<sub>(+16) | 2454<sub>(+9) |  |
| 0.8.0 | 2026-03-03 | 2051 | 2390 | 2445 |  |
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

Generated: 2026-10-22 04:40:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "E1: STC (8.0+0.08s)" [1968, 2022]
  line "E1: LTC (60.0+0.60s)" [2319, 2341]
  line "E1: VLTC (2m24s+1.12s)" [2369, 2412]
  line "P1: STC (8.0+0.08s)" [2051, 2064]
  line "P1: LTC (60.0+0.60s)" [2390, 2406]
  line "P1: VLTC (2m24s+1.12s)" [2445, 2454]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2454 | 58 | 110 | 52% | 2464 | 20% |
|  |  | E1 | 2412 | 44 | 176 | 53% | 2387 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2406 | 60 | 96 | 48% | 2422 | 23% |
|  |  | E1 | 2341 | 44 | 180 | 53% | 2313 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2064 | 58 | 108 | 43% | 2133 | 18% |
|  |  | E1 | 2022 | 44 | 192 | 51% | 2020 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2445 | 45 | 168 | 44% | 2496 | 24% |
|  |  | E1 | 2369 | 43 | 194 | 49% | 2358 | 26% |
|  |  | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2390 | 53 | 124 | 49% | 2398 | 24% |
|  |  | E1 | 2319 | 42 | 212 | 48% | 2346 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2051 | 47 | 172 | 49% | 2075 | 19% |
|  |  | E1 | 1968 | 36 | 284 | 44% | 2052 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |