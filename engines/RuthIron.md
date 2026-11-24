# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2356<sub>(+593) | 2719<sub>(+589) | 2835<sub>(+620) |  |
| 18.9.9 | 2026-01-16 | 1763 | 2130 | 2215 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2376<sub>(+594) | 2736<sub>(+568) | 2844<sub>(+649) |  |
| 18.9.9 | 2026-01-16 | 1782 | 2168 | 2195 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2415 | 2754 | 2861 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+RuthIron+<version>&body=###%20Engine%20name%0ARuthIron%0A%0A###%20Version%0A21.9.6.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:42:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1700 --> 2900
  line "E1: STC (8.0+0.08s)" [1763, 2356]
  line "E1: LTC (60.0+0.60s)" [2130, 2719]
  line "E1: VLTC (2m24s+1.12s)" [2215, 2835]
  line "P1: STC (8.0+0.08s)" [1782, 2376]
  line "P1: LTC (60.0+0.60s)" [2168, 2736]
  line "P1: VLTC (2m24s+1.12s)" [2195, 2844]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  |  | P1 | 2844 | 31 | 320 | 49% | 2867 | 43% |
|  |  | E1 | 2835 | 30 | 382 | 50% | 2817 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  |  | P1 | 2736 | 34 | 284 | 51% | 2722 | 35% |
|  |  | E1 | 2719 | 28 | 432 | 50% | 2701 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2376 | 34 | 290 | 47% | 2418 | 33% |
|  |  | E1 | 2356 | 29 | 386 | 47% | 2391 | 31% |
|  |  | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2195 | 66 | 88 | 49% | 2180 | 22% |
|  |  | E1 | 2215 | 59 | 106 | 48% | 2238 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2168 | 65 | 88 | 47% | 2210 | 23% |
|  |  | E1 | 2130 | 56 | 114 | 46% | 2191 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1782 | 57 | 118 | 47% | 1836 | 18% |
|  |  | E1 | 1763 | 53 | 124 | 42% | 1860 | 27% |