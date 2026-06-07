# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.5 | 2026-05-25 |  |  |  |  |
| 1.1.4 | 2026-05-21 | 671<sub>(+24) | 590<sub>(-391) | 678<sub>(-302) |  |
| 1.1.2 | 2026-05-19 | 647<sub>(-29) | 981<sub>(+6) | 980<sub>(-141) |  |
| 1.1.1 | 2026-05-14 | 676<sub>(+new) | 975<sub>(+new) | 1121<sub>(+new) |  |
| 1.1.0 | 2026-05-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessCore+<version>&body=###%20Engine%20name%0AChessCore%0A%0A###%20Version%0A1.1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-07 06:23:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4"]
  y-axis "Elo Rating" 500 --> 1200
  line "STC (8.0+0.08s)" [676, 647, 671]
  line "STC (8.0+0.08s)" [676, 647, 671]
  line "LTC (60.0+0.60s)" [975, 981, 590]
  line "VLTC (2m24s+1.12s)" [1121, 980, 678]
  line "VLTC (2m24s+1.12s)" [1121, 980, 678]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 678 | 43 | 180 | 48% | 716 | 54% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 590 | 46 | 164 | 54% | 562 | 41% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 671 | 48 | 162 | 53% | 630 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 980 | 53 | 120 | 53% | 957 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 981 | 57 | 104 | 53% | 953 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 647 | 89 | 44 | 55% | 602 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1121 | 32 | 412 | 49% | 1112 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 975 | 36 | 328 | 48% | 979 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 676 | 42 | 248 | 45% | 717 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |