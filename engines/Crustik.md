# Engine: Crustik

Author: Dejon Eltahan

Home: https://github.com/Dejon51/Crustik

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3059<sub>(+444) | 3326<sub>(+398) | 3378<sub>(+373) |  |
| 0.3.0 | 2026-08-27 | 2615 | 2928 | 3005 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3055<sub>(+470) | 3278<sub>(+382) | 3337<sub>(+390) |  |
| 0.3.0 | 2026-08-27 | 2585 | 2896 | 2947 |  |
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

Generated: 2026-11-21 05:37:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2615, 3059]
  line "E1: LTC (60.0+0.60s)" [2928, 3326]
  line "E1: VLTC (2m24s+1.12s)" [3005, 3378]
  line "P1: STC (8.0+0.08s)" [2585, 3055]
  line "P1: LTC (60.0+0.60s)" [2896, 3278]
  line "P1: VLTC (2m24s+1.12s)" [2947, 3337]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3337 | 39 | 164 | 53% | 3312 | 69% |
|  |  | E1 | 3378 | 36 | 196 | 53% | 3355 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3326 | 35 | 216 | 51% | 3316 | 65% |
|  |  | P1 | 3278 | 44 | 138 | 51% | 3264 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3059 | 39 | 192 | 52% | 3040 | 48% |
|  |  | P1 | 3055 | 54 | 96 | 54% | 3021 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3004 | 33 | 282 | 51% | 3000 | 43% |
|  |  | P1 | 2947 | 35 | 242 | 50% | 2942 | 46% |
|  |  | E1 | 3005 | 27 | 420 | 49% | 3012 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2928 | 33 | 270 | 51% | 2916 | 46% |
|  |  | P1 | 2896 | 36 | 238 | 50% | 2893 | 42% |
|  |  | E1 | 2928 | 28 | 386 | 49% | 2939 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2655 | 34 | 272 | 50% | 2651 | 38% |
|  |  | P1 | 2585 | 32 | 310 | 50% | 2588 | 39% |
|  |  | E1 | 2615 | 29 | 370 | 48% | 2638 | 35% |