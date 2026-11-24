# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3067<sub>(+32) | 3310<sub>(-7) | 3406<sub>(+16) |  |
| 2.0.0 | 2026-10-21 | 3035 | 3317 | 3390 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3077<sub>(+62) | 3282<sub>(-20) | 3362<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 3015 | 3302 | 3347 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3015 | 3302 | 3347 |  |
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

Generated: 2026-11-24 05:42:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3035, 3067]
  line "E1: LTC (60.0+0.60s)" [3317, 3310]
  line "E1: VLTC (2m24s+1.12s)" [3390, 3406]
  line "P1: STC (8.0+0.08s)" [3015, 3077]
  line "P1: LTC (60.0+0.60s)" [3302, 3282]
  line "P1: VLTC (2m24s+1.12s)" [3347, 3362]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3362 | 39 | 160 | 49% | 3370 | 74% |
|  |  | E1 | 3406 | 28 | 312 | 50% | 3409 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3282 | 32 | 260 | 52% | 3266 | 61% |
|  |  | E1 | 3310 | 27 | 362 | 48% | 3328 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3077 | 37 | 194 | 53% | 3058 | 61% |
|  |  | E1 | 3067 | 31 | 296 | 52% | 3055 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3347 | 38 | 254 | 67% | 2712 | 47% |
|  |  | E1 | 3390 | 31 | 340 | 62% | 2998 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3302 | 40 | 230 | 69% | 2642 | 46% |
|  |  | E1 | 3317 | 27 | 420 | 61% | 3009 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3015 | 40 | 240 | 66% | 2480 | 40% |
|  |  | E1 | 3035 | 33 | 302 | 56% | 2761 | 42% |