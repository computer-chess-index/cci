# Engine: Crustik

Author: Dejon Eltahan

Home: https://github.com/Dejon51/Crustik

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3054<sub>(+436) | 3324<sub>(+396) | 3376<sub>(+370) |  |
| 0.3.0 | 2026-08-27 | 2618 | 2928 | 3006 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3066<sub>(+473) | 3286<sub>(+385) | 3344<sub>(+390) |  |
| 0.3.0 | 2026-08-27 | 2593 | 2901 | 2954 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-08-27 | 2655 | 2928 | 3004 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crustik+<version>&body=###%20Engine%20name%0ACrustik%0A%0A###%20Version%0A0.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:37:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2618, 3054]
  line "E1: LTC (60.0+0.60s)" [2928, 3324]
  line "E1: VLTC (2m24s+1.12s)" [3006, 3376]
  line "P1: STC (8.0+0.08s)" [2593, 3066]
  line "P1: LTC (60.0+0.60s)" [2901, 3286]
  line "P1: VLTC (2m24s+1.12s)" [2954, 3344]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3376 | 36 | 200 | 53% | 3356 | 68% |
|  |  | P1 | 3344 | 39 | 164 | 53% | 3318 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3286 | 43 | 142 | 51% | 3272 | 61% |
|  |  | E1 | 3324 | 34 | 224 | 51% | 3317 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3066 | 44 | 144 | 53% | 3042 | 51% |
|  |  | E1 | 3054 | 38 | 204 | 51% | 3042 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3004 | 33 | 282 | 51% | 3000 | 43% |
|  |  | P1 | 2954 | 35 | 242 | 50% | 2948 | 46% |
|  |  | E1 | 3006 | 27 | 420 | 49% | 3012 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2928 | 33 | 270 | 51% | 2916 | 46% |
|  |  | P1 | 2901 | 36 | 238 | 50% | 2900 | 42% |
|  |  | E1 | 2928 | 28 | 386 | 49% | 2940 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2655 | 34 | 272 | 50% | 2651 | 38% |
|  |  | P1 | 2593 | 31 | 314 | 50% | 2593 | 39% |
|  |  | E1 | 2618 | 29 | 370 | 48% | 2639 | 35% |