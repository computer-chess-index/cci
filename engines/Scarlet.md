# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2857<sub>(+721) | 3191<sub>(+718) | 3270<sub>(+677) |  |
| 1.0 | 2026-07-26 | 2136 | 2473 | 2593 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3021<sub>(+812) | 3271<sub>(+742) | 3348<sub>(+780) |  |
| 1.0 | 2026-07-26 | 2209 | 2529 | 2568 |  |
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

Generated: 2026-11-10 05:42:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2136, 2857]
  line "E1: LTC (60.0+0.60s)" [2473, 3191]
  line "E1: VLTC (2m24s+1.12s)" [2593, 3270]
  line "P1: STC (8.0+0.08s)" [2209, 3021]
  line "P1: LTC (60.0+0.60s)" [2529, 3271]
  line "P1: VLTC (2m24s+1.12s)" [2568, 3348]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3348 | 36 | 232 | 54% | 3299 | 48% |
|  |  | E1 | 3270 | 29 | 352 | 53% | 3237 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3271 | 39 | 204 | 55% | 3217 | 40% |
|  |  | E1 | 3191 | 30 | 332 | 52% | 3158 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3021 | 33 | 298 | 48% | 3029 | 37% |
|  |  | E1 | 2857 | 30 | 376 | 55% | 2797 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2568 | 44 | 194 | 45% | 2634 | 20% |
|  |  | E1 | 2593 | 39 | 238 | 48% | 2615 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2529 | 46 | 180 | 48% | 2568 | 22% |
|  |  | E1 | 2473 | 38 | 246 | 50% | 2465 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2209 | 44 | 184 | 49% | 2215 | 21% |
|  |  | E1 | 2136 | 36 | 276 | 47% | 2167 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |