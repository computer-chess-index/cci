# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 1886<sub>(+250) | 2827<sub>(+293) | 2904<sub>(+309) |  |
| 1.1 | 2026-07-11 | 1636 | 2534 | 2595 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-07-11 | 1975 | 2734 | 2793 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-07-11 | 2380<sub>(+283) | 2681<sub>(+248) | 2736<sub>(+197) |  |
| 1.0 | 2026-06-10 | 2097 | 2433 | 2539 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Erinn+<version>&body=###%20Engine%20name%0AErinn%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 04:38:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2000 --> 2800
  line "" [2097, 2380]
  line "T1: STC (8.0+0.08s)" [2097, 2380]
  line "T1: LTC (60.0+0.60s)" [2433, 2681]
  line "" [2539, 2736]
  line "T1: VLTC (2m24s+1.12s)" [2539, 2736]
  line "" [1636, 1886]
  line "E1: STC (8.0+0.08s)" [1636, 1886]
  line "E1: LTC (60.0+0.60s)" [2534, 2827]
  line "" [2595, 2904]
  line "E1: VLTC (2m24s+1.12s)" [2595, 2904]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 2904 | 213 | 8 | 88% | 2592 | 25% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2827 | 144 | 16 | 72% | 2634 | 31% |
| 2 | STC <sub>(8.0+0.08s)</sub> | 1886 | 151 | 16 | 72% | 1686 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2595 | 47 | 136 | 53% | 2569 | 44% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2736 | 31 | 302 | 50% | 2736 | 52% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2793 | 45 | 140 | 51% | 2784 | 47% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 45 | 156 | 50% | 2533 | 37% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 27 | 404 | 50% | 2688 | 45% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2734 | 53 | 110 | 54% | 2697 | 38% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1636 | 51 | 142 | 47% | 1677 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2380 | 26 | 448 | 47% | 2404 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1975 | 48 | 158 | 48% | 2020 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2539 | 32 | 316 | 50% | 2533 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2433 | 30 | 368 | 56% | 2368 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2097 | 36 | 276 | 52% | 2066 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |