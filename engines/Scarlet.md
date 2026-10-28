# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2842<sub>(+709) | 3178<sub>(+703) | 3259<sub>(+664) |  |
| 1.0 | 2026-07-26 | 2133 | 2475 | 2595 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3017<sub>(+829) | 3245<sub>(+738) | 3324<sub>(+777) |  |
| 1.0 | 2026-07-26 | 2188 | 2507 | 2547 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-28 05:43:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2133, 2842]
  line "E1: LTC (60.0+0.60s)" [2475, 3178]
  line "E1: VLTC (2m24s+1.12s)" [2595, 3259]
  line "P1: STC (8.0+0.08s)" [2188, 3017]
  line "P1: LTC (60.0+0.60s)" [2507, 3245]
  line "P1: VLTC (2m24s+1.12s)" [2547, 3324]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3324 | 39 | 196 | 55% | 3263 | 47% |
|  |  | E1 | 3259 | 33 | 274 | 53% | 3220 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3245 | 42 | 176 | 56% | 3178 | 39% |
|  |  | E1 | 3178 | 34 | 268 | 51% | 3147 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3017 | 39 | 208 | 49% | 3006 | 35% |
|  |  | E1 | 2842 | 36 | 272 | 57% | 2763 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2595 | 39 | 238 | 48% | 2615 | 26% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2547 | 44 | 194 | 45% | 2614 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2475 | 38 | 246 | 50% | 2465 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2507 | 45 | 180 | 48% | 2546 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2133 | 36 | 276 | 47% | 2164 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2188 | 44 | 184 | 49% | 2195 | 21% |