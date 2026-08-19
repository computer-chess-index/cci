# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2672<sub>(+137) | 2982<sub>(+124) | 3096<sub>(+98) |  |
| 1.00netbin | 2026-04-13 | 2535<sub>(+2142) | 2858<sub>(+2404) | 2998<sub>(+2534) |  |
| 1.00 | 2026-04-12 | 393 | 454 | 464 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:25:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3100
  line "STC (8.0+0.08s)" [393, 2535, 2672]
  line "STC (8.0+0.08s)" [393, 2535, 2672]
  line "LTC (60.0+0.60s)" [454, 2858, 2982]
  line "VLTC (2m24s+1.12s)" [464, 2998, 3096]
  line "VLTC (2m24s+1.12s)" [464, 2998, 3096]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3096 | 26 | 434 | 52% | 3077 | 53% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 28 | 388 | 51% | 2967 | 45% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2672 | 30 | 352 | 53% | 2641 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 2998 | 28 | 426 | 57% | 2780 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2858 | 25 | 546 | 59% | 2680 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2535 | 28 | 470 | 55% | 2375 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 464 | 58 | 176 | 24% | 1052 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 454 | 59 | 148 | 27% | 945 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 393 | 56 | 132 | 34% | 733 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |