# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-10-15 | 2881<sub>(+126) | 3195<sub>(+81) | 3209<sub>(-5) |  |
| 0.13.593 | 2026-06-30 | 2755 | 3114 | 3214 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-10-15 | 2979<sub>(+72) | 3310<sub>(-8) | 3391<sub>(+61) |  |
| 0.13.593 | 2026-06-30 | 2907 | 3318 | 3330 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-10-22 04:41:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2755, 2881]
  line "E1: LTC (60.0+0.60s)" [3114, 3195]
  line "E1: VLTC (2m24s+1.12s)" [3214, 3209]
  line "P1: STC (8.0+0.08s)" [2907, 2979]
  line "P1: LTC (60.0+0.60s)" [3318, 3310]
  line "P1: VLTC (2m24s+1.12s)" [3330, 3391]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3391 | 40 | 156 | 49% | 3398 | 67% |
|  |  | E1 | 3209 | 36 | 208 | 49% | 3220 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3310 | 40 | 168 | 51% | 3299 | 60% |
|  |  | E1 | 3195 | 32 | 268 | 51% | 3185 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2979 | 39 | 194 | 52% | 2961 | 44% |
|  |  | E1 | 2881 | 38 | 210 | 49% | 2886 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3330 | 35 | 220 | 46% | 3362 | 56% |
|  |  | E1 | 3214 | 30 | 312 | 47% | 3235 | 51% |
|  |  | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3318 | 34 | 248 | 52% | 3298 | 49% |
|  |  | E1 | 3114 | 31 | 300 | 48% | 3133 | 53% |
|  |  | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2907 | 41 | 192 | 46% | 2946 | 35% |
|  |  | E1 | 2755 | 30 | 382 | 46% | 2792 | 31% |
|  |  | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |