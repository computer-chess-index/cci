# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-23 | 2147<sub>(+258) | 2504<sub>(+343) | 2611<sub>(+385) |  |
| 1.2.0 | 2026-05-07 | 1889<sub>(+168) | 2161<sub>(+160) | 2226<sub>(+142) |  |
| 1.1.0 | 2026-04-21 | 1721<sub>(+79) | 2001<sub>(+126) | 2084<sub>(+140) |  |
| 1.0.0 | 2026-02-20 | 1642<sub>(+103) | 1875<sub>(+75) | 1944<sub>(+86) |  |
| 0.9.0 | 2026-01-21 | 1539 | 1800 | 1858 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-23 06:28:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0"]
  y-axis "Elo Rating" 1500 --> 2700
  line "STC (8.0+0.08s)" [1539, 1642, 1721, 1889, 2147]
  line "STC (8.0+0.08s)" [1539, 1642, 1721, 1889, 2147]
  line "LTC (60.0+0.60s)" [1800, 1875, 2001, 2161, 2504]
  line "VLTC (2m24s+1.12s)" [1858, 1944, 2084, 2226, 2611]
  line "VLTC (2m24s+1.12s)" [1858, 1944, 2084, 2226, 2611]
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
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0"]
  y-axis "Elo Rating" 1500 --> 2700
  line "STC (8.0+0.08s)" [1539, 1642, 1721, 1889, 2147]
  line "STC (8.0+0.08s)" [1539, 1642, 1721, 1889, 2147]
  line "LTC (60.0+0.60s)" [1800, 1875, 2001, 2161, 2504]
  line "VLTC (2m24s+1.12s)" [1858, 1944, 2084, 2226, 2611]
  line "VLTC (2m24s+1.12s)" [1858, 1944, 2084, 2226, 2611]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2611 | 54 | 106 | 51% | 2591 | 39% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2504 | 67 | 78 | 54% | 2456 | 24% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2147 | 75 | 62 | 53% | 2113 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2226 | 31 | 364 | 51% | 2219 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2161 | 34 | 292 | 50% | 2148 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1889 | 32 | 356 | 51% | 1870 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2084 | 32 | 348 | 53% | 2059 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2001 | 33 | 326 | 51% | 1990 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1721 | 32 | 352 | 50% | 1709 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1944 | 29 | 390 | 50% | 1945 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1875 | 31 | 384 | 51% | 1868 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1642 | 30 | 394 | 48% | 1659 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1858 | 41 | 208 | 50% | 1862 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1800 | 36 | 280 | 53% | 1769 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1539 | 39 | 242 | 49% | 1547 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |