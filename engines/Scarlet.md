# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2804<sub>(+737) | 3110<sub>(+679) | 3201<sub>(+647) |  |
| 1.0 | 2026-07-26 | 2067 | 2431 | 2554 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2884<sub>(+767) | 3105<sub>(+694) | 3173<sub>(+704) |  |
| 1.0 | 2026-07-26 | 2117 | 2411 | 2469 |  |
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

Generated: 2026-11-26 05:43:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3300
  line "E1: STC (8.0+0.08s)" [2067, 2804]
  line "E1: LTC (60.0+0.60s)" [2431, 3110]
  line "E1: VLTC (2m24s+1.12s)" [2554, 3201]
  line "P1: STC (8.0+0.08s)" [2117, 2884]
  line "P1: LTC (60.0+0.60s)" [2411, 3105]
  line "P1: VLTC (2m24s+1.12s)" [2469, 3173]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3173 | 33 | 272 | 52% | 3143 | 50% |
|  |  | E1 | 3201 | 27 | 400 | 52% | 3181 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3105 | 35 | 258 | 52% | 3075 | 40% |
|  |  | E1 | 3110 | 27 | 416 | 49% | 3105 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2884 | 29 | 390 | 48% | 2889 | 35% |
|  |  | E1 | 2804 | 27 | 456 | 55% | 2753 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2554 | 35 | 292 | 49% | 2552 | 28% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2469 | 41 | 226 | 47% | 2484 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2431 | 35 | 286 | 52% | 2399 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2411 | 42 | 208 | 47% | 2456 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2067 | 32 | 348 | 46% | 2110 | 22% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2117 | 38 | 252 | 48% | 2125 | 21% |