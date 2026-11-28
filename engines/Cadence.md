# Engine: Cadence

Author: Michael Grounds

Home: https://github.com/grounzero/cadence

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-11-25 | 2965<sub>(+723) | 3197<sub>(+551) | 3353<sub>(+680) |  |
| 0.6.0 | 2026-11-14 | 2242 | 2646 | 2673 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-11-25 | 2889<sub>(+664) | 3201<sub>(+543) | 3310<sub>(+640) |  |
| 0.6.0 | 2026-11-14 | 2225 | 2658 | 2670 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-11-14 | 2225 | 2658 | 2670 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cadence+<version>&body=###%20Engine%20name%0ACadence%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:36:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.6.0", "0.7.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "E1: STC (8.0+0.08s)" [2242, 2965]
  line "E1: LTC (60.0+0.60s)" [2646, 3197]
  line "E1: VLTC (2m24s+1.12s)" [2673, 3353]
  line "P1: STC (8.0+0.08s)" [2225, 2889]
  line "P1: LTC (60.0+0.60s)" [2658, 3201]
  line "P1: VLTC (2m24s+1.12s)" [2670, 3310]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3310 | 50 | 108 | 53% | 3267 | 61% |
|  |  | E1 | 3353 | 44 | 140 | 54% | 3298 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3197 | 45 | 152 | 61% | 3092 | 51% |
|  |  | P1 | 3201 | 39 | 192 | 58% | 3121 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2965 | 34 | 272 | 57% | 2886 | 46% |
|  |  | P1 | 2889 | 107 | 36 | 78% | 2543 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2670 | 43 | 188 | 57% | 2599 | 26% |
|  |  | E1 | 2673 | 46 | 160 | 52% | 2657 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2658 | 42 | 192 | 54% | 2612 | 28% |
|  |  | E1 | 2646 | 40 | 220 | 50% | 2645 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2225 | 45 | 180 | 46% | 2275 | 21% |
|  |  | E1 | 2242 | 41 | 206 | 50% | 2248 | 27% |