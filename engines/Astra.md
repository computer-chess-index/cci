# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3434<sub>(+622) | 3659<sub>(+833) | 3711<sub>(+722) |  |
| 6.1.1 | 2025-07-21 | 2812 | 2826 | 2989 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3591<sub>(+639) | 3754<sub>(+850) | 3807<sub>(+771) |  |
| 6.1.1 | 2025-07-21 | 2952 | 2904 | 3036 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3405<sub>(+111) | 3546<sub>(+59) | 3559<sub>(+34) |  |
| 6.1.1 | 2025-07-21 | 3294 | 3487 | 3525 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Astra+<version>&body=###%20Engine%20name%0AAstra%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:36:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 2800 --> 3900
  line "E1: STC (8.0+0.08s)" [2812, 3434]
  line "E1: LTC (60.0+0.60s)" [2826, 3659]
  line "E1: VLTC (2m24s+1.12s)" [2989, 3711]
  line "P1: STC (8.0+0.08s)" [2952, 3591]
  line "P1: LTC (60.0+0.60s)" [2904, 3754]
  line "P1: VLTC (2m24s+1.12s)" [3036, 3807]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3294, 3405]
  line "T1: LTC (60.0+0.60s)" [3487, 3546]
  line "T1: VLTC (2m24s+1.12s)" [3525, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3559 | 27 | 312 | 49% | 3567 | 89% |
|  |  | P1 | 3807 | 36 | 184 | 50% | 3771 | 82% |
|  |  | E1 | 3711 | 32 | 264 | 57% | 3576 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3546 | 28 | 294 | 50% | 3545 | 86% |
|  |  | P1 | 3754 | 39 | 174 | 58% | 3667 | 72% |
|  |  | E1 | 3659 | 33 | 260 | 60% | 3470 | 70% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3405 | 25 | 398 | 51% | 3401 | 75% |
|  |  | P1 | 3591 | 31 | 256 | 51% | 3584 | 74% |
|  |  | E1 | 3434 | 24 | 440 | 48% | 3451 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3525 | 23 | 420 | 52% | 3509 | 87% |
|  |  | P1 | 3036 | 246 | 4 | 88% | 2803 | 25% |
|  |  | E1 | 2989 | 199 | 8 | 94% | 2676 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 25 | 400 | 51% | 3475 | 81% |
|  |  | P1 | 2904 | 223 | 4 | 75% | 2770 | 50% |
|  |  | E1 | 2826 | 262 | 4 | 100% | 2512 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3294 | 23 | 514 | 51% | 3278 | 67% |
|  |  | P1 | 2952 | 173 | 8 | 38% | 3046 | 50% |
|  |  | E1 | 2812 | 242 | 12 | 96% | 2230 | 8% |