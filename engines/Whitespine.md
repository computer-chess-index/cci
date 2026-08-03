# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 678<sub>(-175) | 875<sub>(-139) | 1010<sub>(-8) |  |
| 1.3.3 | 2026-03-26 | 853<sub>(+70) | 1014<sub>(-40) | 1018<sub>(-17) |  |
| 1.3.2 | 2025-09-16 | 783<sub>(+new) | 1054<sub>(+new) | 1035<sub>(+new) |  |
| 1.3.1 | 2025-06-08 |  |  |  |  |
| 1.3.0 | 2025-05-11 |  |  |  |  |
| 1.2.0 | 2025-05-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Whitespine+<version>&body=###%20Engine%20name%0AWhitespine%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-03 06:31:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 600 --> 1100
  line "STC (8.0+0.08s)" [783, 853, 678]
  line "STC (8.0+0.08s)" [783, 853, 678]
  line "LTC (60.0+0.60s)" [1054, 1014, 875]
  line "VLTC (2m24s+1.12s)" [1035, 1018, 1010]
  line "VLTC (2m24s+1.12s)" [1035, 1018, 1010]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1010 | 59 | 150 | 49% | 975 | 15% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 875 | 62 | 142 | 45% | 923 | 11% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 678 | 66 | 130 | 36% | 876 | 8% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1018 | 61 | 140 | 49% | 981 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1014 | 64 | 136 | 46% | 1003 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 853 | 72 | 116 | 42% | 933 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1035 | 75 | 106 | 44% | 1157 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1054 | 85 | 92 | 42% | 1183 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 783 | 102 | 76 | 37% | 1054 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |