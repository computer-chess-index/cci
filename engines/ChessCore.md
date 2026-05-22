# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.4 | 2026-05-21 | 674<sub>(+29) | 652<sub>(-331) | 680<sub>(-300) |  |
| 1.1.2 | 2026-05-19 | 645<sub>(-33) | 983<sub>(+7) | 980<sub>(-142) |  |
| 1.1.1 | 2026-05-14 | 678<sub>(+new) | 976<sub>(+new) | 1122<sub>(+new) |  |
| 1.1.0 | 2026-05-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessCore+<version>&body=###%20Engine%20name%0AChessCore%0A%0A###%20Version%0A1.1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 14:54:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4"]
  y-axis "Elo Rating" 600 --> 1200
  line "STC (8.0+0.08s)" [678, 645, 674]
  line "STC (8.0+0.08s)" [678, 645, 674]
  line "LTC (60.0+0.60s)" [976, 983, 652]
  line "VLTC (2m24s+1.12s)" [1122, 980, 680]
  line "VLTC (2m24s+1.12s)" [1122, 980, 680]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 680 | 80 | 52 | 36% | 803 | 37% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 652 | 77 | 54 | 40% | 752 | 39% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 674 | 99 | 36 | 58% | 587 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 980 | 53 | 120 | 53% | 959 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 983 | 57 | 104 | 53% | 954 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 645 | 89 | 44 | 55% | 602 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1122 | 32 | 412 | 49% | 1112 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 976 | 36 | 328 | 48% | 979 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 678 | 42 | 248 | 45% | 717 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |