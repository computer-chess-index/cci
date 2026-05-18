# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 741<sub>(-126) | 909<sub>(-122) | 1118<sub>(+84) |  |
| 1.3.3 | 2026-03-26 | 867<sub>(+73) | 1031<sub>(-42) | 1034<sub>(-16) |  |
| 1.3.2 | 2025-09-16 | 794<sub>(+new) | 1073<sub>(+new) | 1050<sub>(+new) |  |
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

Generated: 2026-05-18 06:29:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1200
  line "STC (8.0+0.08s)" [794, 867, 741]
  line "STC (8.0+0.08s)" [794, 867, 741]
  line "LTC (60.0+0.60s)" [1073, 1031, 909]
  line "VLTC (2m24s+1.12s)" [1050, 1034, 1118]
  line "VLTC (2m24s+1.12s)" [1050, 1034, 1118]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1118 | 68 | 114 | 52% | 996 | 15% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 909 | 75 | 110 | 44% | 944 | 8% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 741 | 80 | 102 | 39% | 898 | 7% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1034 | 62 | 140 | 49% | 994 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1031 | 64 | 136 | 46% | 1017 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 867 | 73 | 116 | 42% | 945 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1050 | 76 | 106 | 44% | 1173 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1073 | 85 | 92 | 42% | 1203 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 794 | 104 | 76 | 37% | 1072 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |