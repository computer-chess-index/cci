# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2867<sub>(+725) | 3195<sub>(+710) | 3279<sub>(+675) |  |
| 1.0 | 2026-07-26 | 2142 | 2485 | 2604 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3073<sub>(+816) | 3320<sub>(+743) | 3394<sub>(+776) |  |
| 1.0 | 2026-07-26 | 2257 | 2577 | 2618 |  |
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

Generated: 2026-11-06 05:42:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2142, 2867]
  line "E1: LTC (60.0+0.60s)" [2485, 3195]
  line "E1: VLTC (2m24s+1.12s)" [2604, 3279]
  line "P1: STC (8.0+0.08s)" [2257, 3073]
  line "P1: LTC (60.0+0.60s)" [2577, 3320]
  line "P1: VLTC (2m24s+1.12s)" [2618, 3394]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3279 | 30 | 332 | 53% | 3245 | 50% |
|  |  | P1 | 3394 | 37 | 224 | 54% | 3345 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3195 | 31 | 316 | 52% | 3166 | 45% |
|  |  | P1 | 3320 | 40 | 196 | 55% | 3262 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2867 | 31 | 364 | 55% | 2804 | 29% |
|  |  | P1 | 3073 | 34 | 272 | 48% | 3079 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2618 | 44 | 194 | 45% | 2684 | 20% |
|  |  | E1 | 2604 | 39 | 238 | 48% | 2626 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2577 | 46 | 180 | 48% | 2616 | 22% |
|  |  | E1 | 2485 | 38 | 246 | 50% | 2476 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2257 | 44 | 184 | 49% | 2264 | 21% |
|  |  | E1 | 2142 | 36 | 276 | 47% | 2172 | 21% |