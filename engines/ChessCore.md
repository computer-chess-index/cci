# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1432<sub>(+725) | 1806<sub>(+754) | 1868<sub>(+791) |  |
| 1.1.5 | 2026-05-25 | 707<sub>(+18) | 1052<sub>(+397) | 1077<sub>(+384) |  |
| 1.1.4 | 2026-05-21 | 689<sub>(+22) | 655<sub>(-335) | 693<sub>(-295) |  |
| 1.1.2 | 2026-05-19 | 667<sub>(-23) | 990<sub>(+4) | 988<sub>(-141) |  |
| 1.1.1 | 2026-05-14 | 690<sub>(+new) | 986<sub>(+new) | 1129<sub>(+new) |  |
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

Generated: 2026-08-25 06:23:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [690, 667, 689, 707, 1432]
  line "STC (8.0+0.08s)" [690, 667, 689, 707, 1432]
  line "LTC (60.0+0.60s)" [986, 990, 655, 1052, 1806]
  line "VLTC (2m24s+1.12s)" [1129, 988, 693, 1077, 1868]
  line "VLTC (2m24s+1.12s)" [1129, 988, 693, 1077, 1868]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1868 | 35 | 260 | 55% | 1809 | 39% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1806 | 34 | 288 | 54% | 1756 | 36% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1432 | 34 | 304 | 54% | 1385 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1077 | 60 | 102 | 49% | 1092 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1052 | 59 | 104 | 57% | 980 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 707 | 77 | 50 | 49% | 721 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 693 | 39 | 244 | 52% | 660 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 655 | 41 | 218 | 53% | 608 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 689 | 42 | 234 | 52% | 637 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 988 | 53 | 120 | 53% | 967 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 990 | 57 | 104 | 53% | 963 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 667 | 90 | 44 | 55% | 624 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1129 | 31 | 412 | 49% | 1121 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 986 | 36 | 328 | 48% | 988 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 690 | 42 | 248 | 45% | 729 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |