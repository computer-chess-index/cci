# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1435<sub>(+726) | 1805<sub>(+752) | 1868<sub>(+789) |  |
| 1.1.5 | 2026-05-25 | 709<sub>(+20) | 1053<sub>(+398) | 1079<sub>(+386) |  |
| 1.1.4 | 2026-05-21 | 689<sub>(+22) | 655<sub>(-336) | 693<sub>(-297) |  |
| 1.1.2 | 2026-05-19 | 667<sub>(-24) | 991<sub>(+4) | 990<sub>(-140) |  |
| 1.1.1 | 2026-05-14 | 691<sub>(+new) | 987<sub>(+new) | 1130<sub>(+new) |  |
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

Generated: 2026-08-26 06:23:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [691, 667, 689, 709, 1435]
  line "STC (8.0+0.08s)" [691, 667, 689, 709, 1435]
  line "LTC (60.0+0.60s)" [987, 991, 655, 1053, 1805]
  line "VLTC (2m24s+1.12s)" [1130, 990, 693, 1079, 1868]
  line "VLTC (2m24s+1.12s)" [1130, 990, 693, 1079, 1868]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1868 | 35 | 260 | 55% | 1810 | 39% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1805 | 34 | 292 | 54% | 1755 | 36% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1435 | 34 | 312 | 54% | 1385 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1079 | 60 | 102 | 49% | 1094 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1053 | 59 | 104 | 57% | 981 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 709 | 77 | 50 | 49% | 721 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 693 | 39 | 244 | 52% | 660 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 655 | 41 | 218 | 53% | 608 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 689 | 42 | 234 | 52% | 639 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 990 | 53 | 120 | 53% | 968 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 991 | 57 | 104 | 53% | 963 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 667 | 90 | 44 | 55% | 625 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1130 | 31 | 412 | 49% | 1122 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 987 | 36 | 328 | 48% | 990 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 691 | 42 | 248 | 45% | 729 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |