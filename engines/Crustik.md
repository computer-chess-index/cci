# Engine: Crustik

Author: Dejon Eltahan

Home: https://github.com/Dejon51/Crustik

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3063<sub>(+444) | 3330<sub>(+398) | 3376<sub>(+367) |  |
| 0.3.0 | 2026-08-27 | 2619 | 2932 | 3009 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3029<sub>(+445) | 3275<sub>(+386) | 3336<sub>(+398) |  |
| 0.3.0 | 2026-08-27 | 2584 | 2889 | 2938 |  |
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

Generated: 2026-11-20 05:37:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2619, 3063]
  line "E1: LTC (60.0+0.60s)" [2932, 3330]
  line "E1: VLTC (2m24s+1.12s)" [3009, 3376]
  line "P1: STC (8.0+0.08s)" [2584, 3029]
  line "P1: LTC (60.0+0.60s)" [2889, 3275]
  line "P1: VLTC (2m24s+1.12s)" [2938, 3336]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3336 | 40 | 160 | 53% | 3306 | 69% |
|  |  | E1 | 3376 | 37 | 184 | 52% | 3356 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3275 | 45 | 134 | 51% | 3259 | 60% |
|  |  | E1 | 3330 | 36 | 204 | 51% | 3320 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3063 | 39 | 192 | 52% | 3046 | 48% |
|  |  | P1 | 3029 | 59 | 80 | 52% | 3008 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3009 | 27 | 420 | 49% | 3016 | 46% |
|  |  | T1 | 3004 | 33 | 282 | 51% | 3000 | 43% |
|  |  | P1 | 2938 | 35 | 242 | 50% | 2932 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2928 | 33 | 270 | 51% | 2916 | 46% |
|  |  | P1 | 2889 | 36 | 238 | 50% | 2886 | 42% |
|  |  | E1 | 2932 | 28 | 386 | 49% | 2943 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2655 | 34 | 272 | 50% | 2651 | 38% |
|  |  | P1 | 2584 | 32 | 298 | 50% | 2584 | 39% |
|  |  | E1 | 2619 | 29 | 370 | 48% | 2642 | 35% |