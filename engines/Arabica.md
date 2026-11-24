# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2790<sub>(-33) | 3152<sub>(-6) | 3264<sub>(-10) |  |
| 0.4.1 | 2026-11-01 | 2823<sub>(+66) | 3158<sub>(-17) | 3274<sub>(+77) |  |
| 0.3.2 | 2026-10-27 | 2757 | 3175 | 3197 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2870<sub>(+59) | 3224<sub>(+45) | 3285<sub>(+49) |  |
| 0.4.1 | 2026-11-01 | 2811<sub>(+62) | 3179<sub>(+71) | 3236<sub>(+5) |  |
| 0.3.2 | 2026-10-27 | 2749 | 3108 | 3231 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.2 | 2026-10-27 | 2749 | 3108 | 3231 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arabica+<version>&body=###%20Engine%20name%0AArabica%0A%0A###%20Version%0A0.4.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:35:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.2", "0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2757, 2823, 2790]
  line "E1: LTC (60.0+0.60s)" [3175, 3158, 3152]
  line "E1: VLTC (2m24s+1.12s)" [3197, 3274, 3264]
  line "P1: STC (8.0+0.08s)" [2749, 2811, 2870]
  line "P1: LTC (60.0+0.60s)" [3108, 3179, 3224]
  line "P1: VLTC (2m24s+1.12s)" [3231, 3236, 3285]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3285 | 39 | 182 | 51% | 3276 | 58% |
|  |  | E1 | 3264 | 33 | 252 | 49% | 3276 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3224 | 48 | 116 | 52% | 3212 | 55% |
|  |  | E1 | 3152 | 40 | 180 | 50% | 3152 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2870 | 40 | 180 | 53% | 2846 | 47% |
|  |  | E1 | 2790 | 33 | 278 | 46% | 2830 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3236 | 34 | 240 | 51% | 3213 | 57% |
|  |  | E1 | 3274 | 32 | 270 | 51% | 3256 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3179 | 34 | 252 | 52% | 3131 | 53% |
|  |  | E1 | 3158 | 29 | 358 | 56% | 3085 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2811 | 37 | 232 | 52% | 2763 | 39% |
|  |  | E1 | 2823 | 30 | 384 | 57% | 2720 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3231 | 41 | 160 | 54% | 3200 | 58% |
|  |  | E1 | 3197 | 32 | 264 | 49% | 3206 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3108 | 51 | 106 | 48% | 3125 | 55% |
|  |  | E1 | 3175 | 43 | 152 | 51% | 3166 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2749 | 48 | 136 | 50% | 2749 | 36% |
|  |  | E1 | 2757 | 34 | 274 | 46% | 2796 | 35% |