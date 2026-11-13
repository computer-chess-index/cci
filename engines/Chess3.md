# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2504<sub>(-33) | 2795<sub>(+156) | 2885<sub>(+77) |  |
| 3.0 | 2026-01-17 | 2537 | 2639 | 2808 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2487<sub>(+126) | 2758<sub>(-24) | 2820<sub>(+193) |  |
| 3.0 | 2026-01-17 | 2361 | 2782 | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2511<sub>(+35) | 2807<sub>(+45) | 2894<sub>(+86) |  |
| 3.0 | 2026-01-17 | 2476 | 2762 | 2808 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess3+<version>&body=###%20Engine%20name%0AChess3%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:37:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2537, 2504]
  line "E1: LTC (60.0+0.60s)" [2639, 2795]
  line "E1: VLTC (2m24s+1.12s)" [2808, 2885]
  line "P1: STC (8.0+0.08s)" [2361, 2487]
  line "P1: LTC (60.0+0.60s)" [2782, 2758]
  line "P1: VLTC (2m24s+1.12s)" [2627, 2820]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "T1: STC (8.0+0.08s)" [2476, 2511]
  line "T1: LTC (60.0+0.60s)" [2762, 2807]
  line "T1: VLTC (2m24s+1.12s)" [2808, 2894]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2894 | 23 | 568 | 51% | 2882 | 40% |
|  |  | P1 | 2820 | 32 | 304 | 49% | 2834 | 36% |
|  |  | E1 | 2885 | 27 | 440 | 49% | 2878 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  |  | P1 | 2758 | 36 | 282 | 58% | 2560 | 28% |
|  |  | E1 | 2795 | 28 | 420 | 50% | 2773 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
|  |  | P1 | 2487 | 37 | 244 | 51% | 2483 | 34% |
|  |  | E1 | 2504 | 31 | 354 | 48% | 2519 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2627 | 225 | 16 | 69% | 2272 | 13% |
|  |  | E1 | 2808 | 118 | 32 | 59% | 2677 | 13% |
|  |  | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2639 | 111 | 44 | 72% | 2357 | 25% |
|  |  | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  |  | P1 | 2782 | 170 | 12 | 63% | 2641 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2537 | 135 | 32 | 66% | 2349 | 6% |
|  |  | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |
|  |  | P1 | 2361 | 146 | 28 | 73% | 1742 | 18% |