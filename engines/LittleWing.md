# Engine: LittleWing

Author: Vincent Ollivier

Home: https://github.com/vinc/littlewing

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2059<sub>(+43) | 2376<sub>(+7) | 2456<sub>(+37) |  |
| 0.8.0 | 2026-03-03 | 2016 | 2369 | 2419 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.1 | 2026-10-17 | 2133<sub>(+27) | 2460<sub>(+18) | 2507<sub>(+8) |  |
| 0.8.0 | 2026-03-03 | 2106 | 2442 | 2499 |  |
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

Generated: 2026-11-06 05:39:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.8.1"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2016, 2059]
  line "E1: LTC (60.0+0.60s)" [2369, 2376]
  line "E1: VLTC (2m24s+1.12s)" [2419, 2456]
  line "P1: STC (8.0+0.08s)" [2106, 2133]
  line "P1: LTC (60.0+0.60s)" [2442, 2460]
  line "P1: VLTC (2m24s+1.12s)" [2499, 2507]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2507 | 52 | 130 | 52% | 2516 | 23% |
|  |  | E1 | 2456 | 41 | 204 | 52% | 2438 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2460 | 53 | 124 | 49% | 2469 | 23% |
|  |  | E1 | 2376 | 38 | 236 | 51% | 2364 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2133 | 49 | 152 | 47% | 2159 | 20% |
|  |  | E1 | 2059 | 41 | 224 | 50% | 2061 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2407 | 26 | 516 | 51% | 2398 | 22% |
|  |  | P1 | 2499 | 45 | 168 | 44% | 2550 | 24% |
|  |  | E1 | 2419 | 43 | 194 | 49% | 2407 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2442 | 53 | 124 | 49% | 2452 | 24% |
|  |  | E1 | 2369 | 42 | 212 | 48% | 2396 | 18% |
|  |  | T1 | 2344 | 26 | 524 | 53% | 2313 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2106 | 47 | 172 | 49% | 2129 | 19% |
|  |  | E1 | 2016 | 36 | 284 | 44% | 2099 | 18% |
|  |  | T1 | 2074 | 24 | 644 | 52% | 2052 | 20% |