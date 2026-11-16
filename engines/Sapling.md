# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3073<sub>(+31) | 3317<sub>(-4) | 3410<sub>(+17) |  |
| 2.0.0 | 2026-10-21 | 3042 | 3321 | 3393 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3043<sub>(+61) | 3247<sub>(-31) | 3340<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 2982 | 3278 | 3325 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 2982 | 3278 | 3325 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sapling+<version>&body=###%20Engine%20name%0ASapling%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:42:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "E1: STC (8.0+0.08s)" [3042, 3073]
  line "E1: LTC (60.0+0.60s)" [3321, 3317]
  line "E1: VLTC (2m24s+1.12s)" [3393, 3410]
  line "P1: STC (8.0+0.08s)" [2982, 3043]
  line "P1: LTC (60.0+0.60s)" [3278, 3247]
  line "P1: VLTC (2m24s+1.12s)" [3325, 3340]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3340 | 39 | 160 | 49% | 3348 | 74% |
|  |  | E1 | 3410 | 29 | 300 | 50% | 3410 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3247 | 35 | 220 | 51% | 3241 | 61% |
|  |  | E1 | 3317 | 27 | 342 | 48% | 3330 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3043 | 40 | 170 | 53% | 3024 | 58% |
|  |  | E1 | 3073 | 32 | 272 | 51% | 3060 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3325 | 38 | 254 | 67% | 2696 | 47% |
|  |  | E1 | 3393 | 31 | 336 | 62% | 2997 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3278 | 41 | 226 | 69% | 2614 | 46% |
|  |  | E1 | 3321 | 28 | 404 | 61% | 3001 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3042 | 34 | 290 | 57% | 2755 | 43% |
|  |  | P1 | 2982 | 42 | 228 | 67% | 2430 | 39% |