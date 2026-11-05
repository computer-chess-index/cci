# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3132<sub>(+40) | 3384<sub>(-2) | 3479<sub>(+26) |  |
| 2.0.0 | 2026-10-21 | 3092 | 3386 | 3453 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3287<sub>(+62) | 3505<sub>(-32) | 3602<sub>(+19) |  |
| 2.0.0 | 2026-10-21 | 3225 | 3537 | 3583 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3225 | 3537 | 3583 |  |
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

Generated: 2026-11-05 05:42:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3092, 3132]
  line "E1: LTC (60.0+0.60s)" [3386, 3384]
  line "E1: VLTC (2m24s+1.12s)" [3453, 3479]
  line "P1: STC (8.0+0.08s)" [3225, 3287]
  line "P1: LTC (60.0+0.60s)" [3537, 3505]
  line "P1: VLTC (2m24s+1.12s)" [3583, 3602]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3602 | 43 | 136 | 50% | 3603 | 73% |
|  |  | E1 | 3479 | 32 | 236 | 51% | 3472 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3505 | 36 | 208 | 51% | 3498 | 61% |
|  |  | E1 | 3384 | 30 | 278 | 48% | 3399 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3287 | 43 | 142 | 54% | 3262 | 59% |
|  |  | E1 | 3132 | 36 | 224 | 52% | 3117 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3583 | 38 | 254 | 67% | 2900 | 47% |
|  |  | E1 | 3453 | 32 | 320 | 62% | 3035 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3537 | 43 | 214 | 70% | 2769 | 44% |
|  |  | E1 | 3386 | 29 | 380 | 62% | 3038 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3092 | 35 | 272 | 57% | 2788 | 42% |
|  |  | P1 | 3225 | 43 | 220 | 68% | 2593 | 39% |