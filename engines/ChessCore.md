# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1415<sub>(+722) | 1814<sub>(+770) | 1867<sub>(+799) |  |
| 1.1.5 | 2026-05-25 | 693<sub>(+15) | 1044<sub>(+400) | 1068<sub>(+386) |  |
| 1.1.4 | 2026-05-21 | 678<sub>(+27) | 644<sub>(-337) | 682<sub>(-298) |  |
| 1.1.2 | 2026-05-19 | 651<sub>(-28) | 981<sub>(+6) | 980<sub>(-139) |  |
| 1.1.1 | 2026-05-14 | 679<sub>(+new) | 975<sub>(+new) | 1119<sub>(+new) |  |
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

Generated: 2026-07-28 06:24:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [679, 651, 678, 693, 1415]
  line "STC (8.0+0.08s)" [679, 651, 678, 693, 1415]
  line "LTC (60.0+0.60s)" [975, 981, 644, 1044, 1814]
  line "VLTC (2m24s+1.12s)" [1119, 980, 682, 1068, 1867]
  line "VLTC (2m24s+1.12s)" [1119, 980, 682, 1068, 1867]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1867 | 39 | 220 | 57% | 1794 | 39% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1814 | 37 | 244 | 55% | 1747 | 34% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1415 | 38 | 244 | 55% | 1359 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1068 | 60 | 102 | 49% | 1084 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1044 | 59 | 104 | 57% | 972 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 693 | 77 | 50 | 49% | 706 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 682 | 39 | 244 | 52% | 649 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 644 | 41 | 218 | 53% | 598 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 678 | 42 | 234 | 52% | 628 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 980 | 53 | 120 | 53% | 957 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 981 | 57 | 104 | 53% | 953 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 651 | 89 | 44 | 55% | 609 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1119 | 31 | 412 | 49% | 1111 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 975 | 36 | 328 | 48% | 979 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 679 | 42 | 248 | 45% | 718 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |