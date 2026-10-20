# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2759<sub>(+677) | 3129<sub>(+708) | 3202<sub>(+660) |  |
| 1.0 | 2026-07-26 | 2082 | 2421 | 2542 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3012<sub>(+836) | 3220<sub>(+725) | 3308<sub>(+775) |  |
| 1.0 | 2026-07-26 | 2176 | 2495 | 2533 |  |
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

Generated: 2026-10-20 04:43:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3400
  line "E1: STC (8.0+0.08s)" [2082, 2759]
  line "E1: LTC (60.0+0.60s)" [2421, 3129]
  line "E1: VLTC (2m24s+1.12s)" [2542, 3202]
  line "P1: STC (8.0+0.08s)" [2176, 3012]
  line "P1: LTC (60.0+0.60s)" [2495, 3220]
  line "P1: VLTC (2m24s+1.12s)" [2533, 3308]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3308 | 40 | 184 | 56% | 3243 | 49% |
|  |  | E1 | 3202 | 33 | 266 | 54% | 3158 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3220 | 46 | 154 | 56% | 3148 | 38% |
|  |  | E1 | 3129 | 36 | 240 | 53% | 3087 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3012 | 42 | 184 | 51% | 2986 | 36% |
|  |  | E1 | 2759 | 39 | 224 | 55% | 2691 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2533 | 44 | 194 | 45% | 2597 | 20% |
|  |  | E1 | 2542 | 39 | 238 | 48% | 2562 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2495 | 46 | 180 | 48% | 2534 | 22% |
|  |  | E1 | 2421 | 38 | 246 | 50% | 2412 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2176 | 44 | 184 | 49% | 2183 | 21% |
|  |  | E1 | 2082 | 36 | 276 | 47% | 2113 | 21% |