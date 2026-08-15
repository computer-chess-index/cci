# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1426<sub>(+728) | 1810<sub>(+765) | 1864<sub>(+795) |  |
| 1.1.5 | 2026-05-25 | 698<sub>(+18) | 1045<sub>(+398) | 1069<sub>(+385) |  |
| 1.1.4 | 2026-05-21 | 680<sub>(+24) | 647<sub>(-336) | 684<sub>(-297) |  |
| 1.1.2 | 2026-05-19 | 656<sub>(-26) | 983<sub>(+6) | 981<sub>(-140) |  |
| 1.1.1 | 2026-05-14 | 682<sub>(+new) | 977<sub>(+new) | 1121<sub>(+new) |  |
| 1.1.0 | 2026-05-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessCore+<version>&body=###%20Engine%20name%0AChessCore%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-15 06:23:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [682, 656, 680, 698, 1426]
  line "STC (8.0+0.08s)" [682, 656, 680, 698, 1426]
  line "LTC (60.0+0.60s)" [977, 983, 647, 1045, 1810]
  line "VLTC (2m24s+1.12s)" [1121, 981, 684, 1069, 1864]
  line "VLTC (2m24s+1.12s)" [1121, 981, 684, 1069, 1864]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1864 | 37 | 240 | 56% | 1798 | 38% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1810 | 36 | 264 | 55% | 1748 | 35% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1426 | 34 | 296 | 54% | 1376 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1069 | 60 | 102 | 49% | 1085 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1045 | 59 | 104 | 57% | 973 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 698 | 77 | 50 | 49% | 710 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 684 | 39 | 244 | 52% | 652 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 647 | 41 | 218 | 53% | 601 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 680 | 42 | 234 | 52% | 630 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 981 | 53 | 120 | 53% | 959 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 983 | 57 | 104 | 53% | 954 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 656 | 89 | 44 | 55% | 614 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1121 | 31 | 412 | 49% | 1112 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 977 | 36 | 328 | 48% | 980 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 682 | 42 | 248 | 45% | 721 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |