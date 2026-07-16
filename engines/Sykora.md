# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-15 | 2711<sub>(+385) | 3073<sub>(+83) | 3183<sub>(+141) |  |
| 3.0 | 2026-07-12 | 2326<sub>(+new) | 2990<sub>(+new) | 3042<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 1990<sub>(+112) | 2348<sub>(+134) | 2430<sub>(+24) |  |
| 0.1.0 | 2026-02-17 | 1878 | 2214 | 2406 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:29:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1"]
  y-axis "Elo Rating" 1800 --> 3200
  line "STC (8.0+0.08s)" [1878, 1990, 2326, 2711]
  line "STC (8.0+0.08s)" [1878, 1990, 2326, 2711]
  line "LTC (60.0+0.60s)" [2214, 2348, 2990, 3073]
  line "VLTC (2m24s+1.12s)" [2406, 2430, 3042, 3183]
  line "VLTC (2m24s+1.12s)" [2406, 2430, 3042, 3183]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1"]
  y-axis "Elo Rating" 1800 --> 3200
  line "STC (8.0+0.08s)" [1878, 1990, 2326, 2711]
  line "STC (8.0+0.08s)" [1878, 1990, 2326, 2711]
  line "LTC (60.0+0.60s)" [2214, 2348, 2990, 3073]
  line "VLTC (2m24s+1.12s)" [2406, 2430, 3042, 3183]
  line "VLTC (2m24s+1.12s)" [2406, 2430, 3042, 3183]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3183 | 86 | 32 | 53% | 3158 | 75% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3073 | 116 | 16 | 56% | 3031 | 88% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2711 | 96 | 30 | 62% | 2607 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3042 | 48 | 124 | 56% | 2978 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 56 | 96 | 54% | 2943 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2326 | 34 | 240 | 65% | 2215 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2430 | 36 | 254 | 53% | 2406 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2348 | 33 | 304 | 50% | 2344 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1990 | 34 | 306 | 51% | 1979 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2406 | 126 | 28 | 21% | 2709 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2214 | 70 | 70 | 46% | 2246 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1878 | 97 | 40 | 41% | 1999 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |