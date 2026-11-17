# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3191<sub>(-9) | 3411<sub>(0) | 3452<sub>(-28) |  |
| 5.0 | 2026-11-02 | 3200<sub>(+403) | 3411<sub>(+251) | 3480<sub>(+218) |  |
| 4.1 | 2026-08-06 | 2797 | 3160 | 3262 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3174<sub>(+22) | 3410<sub>(+63) | 3401<sub>(+23) |  |
| 5.0 | 2026-11-02 | 3152<sub>(+391) | 3347<sub>(+224) | 3378<sub>(+156) |  |
| 4.1 | 2026-08-06 | 2761 | 3123 | 3222 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-08-06 | 2871 | 3163 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+NarcNext+<version>&body=###%20Engine%20name%0ANarcNext%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:40:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2797, 3200, 3191]
  line "E1: LTC (60.0+0.60s)" [3160, 3411, 3411]
  line "E1: VLTC (2m24s+1.12s)" [3262, 3480, 3452]
  line "P1: STC (8.0+0.08s)" [2761, 3152, 3174]
  line "P1: LTC (60.0+0.60s)" [3123, 3347, 3410]
  line "P1: VLTC (2m24s+1.12s)" [3222, 3378, 3401]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3401 | 46 | 110 | 50% | 3397 | 83% |
|  |  | E1 | 3452 | 32 | 230 | 51% | 3447 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3410 | 44 | 128 | 50% | 3411 | 73% |
|  |  | E1 | 3411 | 33 | 230 | 51% | 3407 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3174 | 40 | 160 | 48% | 3191 | 63% |
|  |  | E1 | 3191 | 30 | 302 | 51% | 3183 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3378 | 43 | 134 | 53% | 3362 | 72% |
|  |  | E1 | 3480 | 32 | 244 | 54% | 3448 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3347 | 33 | 222 | 57% | 3301 | 74% |
|  |  | E1 | 3411 | 31 | 268 | 54% | 3379 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3152 | 45 | 134 | 52% | 3131 | 58% |
|  |  | E1 | 3200 | 30 | 304 | 52% | 3154 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3222 | 31 | 276 | 48% | 3236 | 57% |
|  |  | E1 | 3262 | 27 | 378 | 47% | 3283 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3123 | 35 | 226 | 49% | 3131 | 56% |
|  |  | E1 | 3160 | 28 | 372 | 48% | 3173 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2761 | 37 | 236 | 46% | 2805 | 38% |
|  |  | E1 | 2797 | 29 | 386 | 45% | 2844 | 37% |