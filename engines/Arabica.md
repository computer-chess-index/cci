# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2801<sub>(-23) | 3150<sub>(-9) | 3267<sub>(-8) |  |
| 0.4.1 | 2026-11-01 | 2824<sub>(+63) | 3159<sub>(-9) | 3275<sub>(+75) |  |
| 0.3.2 | 2026-10-27 | 2761 | 3168 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2882<sub>(+63) | 3232<sub>(+43) | 3295<sub>(+50) |  |
| 0.4.1 | 2026-11-01 | 2819<sub>(+61) | 3189<sub>(+79) | 3245<sub>(+5) |  |
| 0.3.2 | 2026-10-27 | 2758 | 3110 | 3240 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.2 | 2026-10-27 | 2758 | 3110 | 3240 |  |
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

Generated: 2026-11-25 05:35:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.2", "0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2761, 2824, 2801]
  line "E1: LTC (60.0+0.60s)" [3168, 3159, 3150]
  line "E1: VLTC (2m24s+1.12s)" [3200, 3275, 3267]
  line "P1: STC (8.0+0.08s)" [2758, 2819, 2882]
  line "P1: LTC (60.0+0.60s)" [3110, 3189, 3232]
  line "P1: VLTC (2m24s+1.12s)" [3240, 3245, 3295]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3267 | 33 | 256 | 49% | 3278 | 57% |
|  |  | P1 | 3295 | 38 | 190 | 51% | 3286 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3150 | 39 | 188 | 49% | 3155 | 47% |
|  |  | P1 | 3232 | 46 | 128 | 51% | 3222 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2882 | 39 | 188 | 53% | 2855 | 47% |
|  |  | E1 | 2801 | 33 | 286 | 47% | 2831 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3245 | 34 | 240 | 51% | 3222 | 57% |
|  |  | E1 | 3275 | 32 | 270 | 51% | 3258 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3189 | 34 | 252 | 52% | 3140 | 53% |
|  |  | E1 | 3159 | 29 | 358 | 56% | 3087 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2819 | 37 | 232 | 52% | 2772 | 39% |
|  |  | E1 | 2824 | 30 | 384 | 57% | 2723 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3240 | 41 | 160 | 54% | 3209 | 58% |
|  |  | E1 | 3200 | 32 | 264 | 49% | 3209 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3168 | 40 | 172 | 50% | 3170 | 52% |
|  |  | P1 | 3110 | 49 | 116 | 47% | 3131 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2761 | 33 | 286 | 46% | 2799 | 36% |
|  |  | P1 | 2758 | 45 | 148 | 51% | 2755 | 41% |