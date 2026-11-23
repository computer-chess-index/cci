# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2785<sub>(-37) | 3151<sub>(-5) | 3263<sub>(-9) |  |
| 0.4.1 | 2026-11-01 | 2822<sub>(+67) | 3156<sub>(-23) | 3272<sub>(+78) |  |
| 0.3.2 | 2026-10-27 | 2755 | 3179 | 3194 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2866<sub>(+59) | 3221<sub>(+44) | 3282<sub>(+49) |  |
| 0.4.1 | 2026-11-01 | 2807<sub>(-9) | 3177<sub>(+84) | 3233<sub>(+17) |  |
| 0.3.2 | 2026-10-27 | 2816 | 3093 | 3216 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.2 | 2026-10-27 | 2816 | 3093 | 3216 |  |
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

Generated: 2026-11-23 05:35:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.2", "0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2755, 2822, 2785]
  line "E1: LTC (60.0+0.60s)" [3179, 3156, 3151]
  line "E1: VLTC (2m24s+1.12s)" [3194, 3272, 3263]
  line "P1: STC (8.0+0.08s)" [2816, 2807, 2866]
  line "P1: LTC (60.0+0.60s)" [3093, 3177, 3221]
  line "P1: VLTC (2m24s+1.12s)" [3216, 3233, 3282]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3282 | 39 | 182 | 51% | 3274 | 58% |
|  |  | E1 | 3263 | 33 | 248 | 49% | 3276 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3221 | 48 | 116 | 52% | 3209 | 55% |
|  |  | E1 | 3151 | 41 | 176 | 50% | 3154 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2785 | 34 | 270 | 45% | 2831 | 41% |
|  |  | P1 | 2866 | 40 | 180 | 53% | 2842 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3233 | 34 | 240 | 51% | 3210 | 57% |
|  |  | E1 | 3272 | 32 | 270 | 51% | 3255 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3177 | 34 | 252 | 52% | 3128 | 53% |
|  |  | E1 | 3156 | 29 | 358 | 56% | 3083 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2807 | 37 | 232 | 52% | 2759 | 39% |
|  |  | E1 | 2822 | 30 | 384 | 57% | 2720 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3216 | 56 | 84 | 57% | 3170 | 61% |
|  |  | E1 | 3194 | 33 | 248 | 48% | 3208 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3093 | 84 | 40 | 43% | 3156 | 50% |
|  |  | E1 | 3179 | 46 | 132 | 52% | 3163 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2816 | 147 | 12 | 42% | 2871 | 50% |
|  |  | E1 | 2755 | 36 | 250 | 45% | 2799 | 36% |