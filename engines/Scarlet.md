# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2839<sub>(+714) | 3173<sub>(+704) | 3255<sub>(+666) |  |
| 1.0 | 2026-07-26 | 2125 | 2469 | 2589 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3025<sub>(+819) | 3262<sub>(+737) | 3340<sub>(+776) |  |
| 1.0 | 2026-07-26 | 2206 | 2525 | 2564 |  |
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

Generated: 2026-11-02 05:42:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2125, 2839]
  line "E1: LTC (60.0+0.60s)" [2469, 3173]
  line "E1: VLTC (2m24s+1.12s)" [2589, 3255]
  line "P1: STC (8.0+0.08s)" [2206, 3025]
  line "P1: LTC (60.0+0.60s)" [2525, 3262]
  line "P1: VLTC (2m24s+1.12s)" [2564, 3340]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3340 | 39 | 196 | 55% | 3279 | 47% |
|  |  | E1 | 3255 | 31 | 296 | 53% | 3220 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3262 | 42 | 180 | 56% | 3195 | 38% |
|  |  | E1 | 3173 | 33 | 288 | 51% | 3144 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3025 | 38 | 228 | 48% | 3024 | 36% |
|  |  | E1 | 2839 | 33 | 312 | 55% | 2773 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2564 | 44 | 194 | 45% | 2630 | 20% |
|  |  | E1 | 2589 | 39 | 238 | 48% | 2611 | 26% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2525 | 46 | 180 | 48% | 2564 | 22% |
|  |  | E1 | 2469 | 38 | 246 | 50% | 2461 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2206 | 44 | 184 | 49% | 2213 | 21% |
|  |  | E1 | 2125 | 36 | 276 | 47% | 2156 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |